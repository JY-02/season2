from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
from django.shortcuts import get_object_or_404
from .models import *
from .serializers import createSerializer

MembersSerializer = createSerializer(Members)
BooksSerializer = createSerializer(Books)
MyLibrarySerializer = createSerializer(MyLibrary)
DraftSerializer = createSerializer(Draft)
IntroSerializer = createSerializer(Intro)
DraftPageSerializer = createSerializer(DraftPage)
FeedBackSerializer = createSerializer(FeedBack)
FollowersSerializer = createSerializer(Followers)
FlowerSerializer = createSerializer(Flower)
MyForestSerializer = createSerializer(MyForest)
MyFlowerSerializer = createSerializer(MyFlower)

#temporary auth for API test
class LoginViewforAuth(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username'),
        password = request.data.get('password'),
        user=authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'message': 'logged in successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'invalid info'}, status=status.HTTP_401_UNAUTHORIZED)
class MembersViewSet(viewsets.ModelViewSet):
    queryset = Members.objects.all()
    serializer_class = MembersSerializer
    @action(detail=False, methods=['get'])
    def user_nickname(self, request):
        #calling user nickname
        user = request.user
        return Response({"user_nickname": user.nickname})
    @action(detail=False, methods=['get'])
    def user_id(self, request):
        #calling user id(PK)
        user = request.user
        return Response({"user_id": user.id})

#buying seeds
class PurchaseSeeds(APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        seeds_for_purchase=request.data.get('seeds_for_purchase',0)

        try:
            seeds_for_purchase=int(seeds_for_purchase)
        except ValueError:
            return Response({'error' : '올바르지 않은 씨앗 값입니다.'}, status=400)

        if seeds_for_purchase<0:
            return Response({'error' : '씨앗의 값이 0보다 작습니다.'}, status=400)


        user.seedCnt += int(seeds_for_purchase)
        user.save()
        return Response({'message' : '씨앗 구매 성공!', '씨앗 개수' : user.seedCnt})

#counting amount of seeds
class GetSeedsCount(APIView):
    def get(self, request, *args, **kwargs):
        user = request.user
        return Response({'씨앗 개수' : user.seedCnt})

class BooksViewSet(viewsets.ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer

class MyLibraryViewSet(viewsets.ModelViewSet):
    queryset = MyLibrary.objects.all()
    serializer_class = MyLibrarySerializer

class DraftViewSet(viewsets.ModelViewSet):
    queryset = Draft.objects.all()
    serializer_class = DraftSerializer
    @action(methods=['post'], detail=True)
    def choose_diff(self, request):
        draft=self.get_object()

        diff_count = request.data.get('diff_Count')
        if diff_count is None:
            return Response({'error' : 'diff_Count is required.'}, status=400)
        try:
            diff_count=int(diff_count)
            if not 3<=diff_count<=5:
                raise ValueError
        except ValueError:
            return Response({'error' : 'invalid diff_Count. '
                            'must be an integer between 3 and 5.'}, status=400)

        draft.diff=diff_count
        draft.save()

        return Response({'message' : "diff_Count updated successfully", 'diff' : diff_count})

    @action(detail=False, methods=['post'], url_path='genre')
    def genre(self, request):
        nickname = request.data.get('nickname')
        genre = request.data.get('genre')

        if not nickname or not genre:
            return Response({"error": "닉네임과 장르를 모두 제공해야 합니다."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            member = Members.objects.get(nickname=nickname)
        except Members.DoesNotExist:
            return Response({"error": "회원을 찾을 수 없습니다."}, status=status.HTTP_404_NOT_FOUND)

        Draft.objects.filter(user=member).update(genre=genre)

        return Response({"message": "Draft 장르가 성공적으로 업데이트되었습니다."}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def writer(self, request):
        nickname = request.data.get('nickname')
        writer_name = request.data.get('writer')

        # 닉네임으로 멤버 조회
        member = get_object_or_404(Members, nickname=nickname)

        # Draft 인스턴스 생성
        draft_data = {
            'user': member.id,
            'writer': writer_name,
            'drawSty': request.data.get('drawSty', 0),
            'diff': request.data.get('diff', 0)
        }
        draft_serializer = DraftSerializer(data=draft_data)
        if draft_serializer.is_valid():
            draft_serializer.save()
            return Response(draft_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(draft_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#temporary subject maker. need to erase later.
def generate_subject():
    subjects=[f"subject {i}"for i in random.sample(range(100),3)]
    return subjects

class IntroViewSet(viewsets.ModelViewSet):
    queryset = Intro.objects.all()
    serializer_class = IntroSerializer

    @action(detail=False, methods=['post'])
    def create_subjects(self, request):
        draft_id = request.data.get('draft_id')
        draft=get_object_or_404(Draft, pk=draft_id)

        subjects=generate_subject()
        created_subjects=[]
        for subject in subjects:
            intro = Intro.objects.create(subject=subject, draft=draft)
            created_subjects.append({'id': intro.id, 'subject': intro.subject})
        return Response({'message': 'Intro created successfully',
                        'intros': created_subjects},
                        status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['post'])
    def recreate_subjects(self, request):
        draft_id = request.data.get('draft_id')
        draft = get_object_or_404(Draft, pk=draft_id)

        Intro.objects.all().delete()
        subjects=generate_subject()
        created_subjects=[]
        for subject in subjects:
            intro = Intro.objects.create(subject=subject, draft=draft)
            created_subjects.append({'id': intro.id, 'subject': intro.subject})
        return Response({'message' : "subject recreated successfully",
                    'intros': created_subjects},
                        status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['post'])
    def select_subject(self, request):
        draft_id = request.data.get('draft_id')
        draft = get_object_or_404(Draft, pk=draft_id)

        subject_id=request.data.get('subject_id')
        subject=get_object_or_404(Intro, id=subject_id)
        return Response({'message' : "subject selected successfully",
                        'selected_subject':
                            {'id':subject.id,
                            'subject':subject.subject,
                            'draft_id':draft.id}})
class DraftPageViewSet(viewsets.ModelViewSet):
    queryset = DraftPage.objects.all()
    serializer_class = DraftPageSerializer

class FeedBackViewSet(viewsets.ModelViewSet):
    queryset = FeedBack.objects.all()
    serializer_class = FeedBackSerializer

class FollowersViewSet(viewsets.ModelViewSet):
    queryset = Followers.objects.all()
    serializer_class = FollowersSerializer

class FlowerViewSet(viewsets.ModelViewSet):
    queryset = Flower.objects.all()
    serializer_class = FlowerSerializer

class MyForestViewSet(viewsets.ModelViewSet):
    queryset = MyForest.objects.all()
    serializer_class = MyForestSerializer

class MyFlowerViewSet(viewsets.ModelViewSet):
    queryset = MyFlower.objects.all()
    serializer_class = MyFlowerSerializer
# Create your views here.
