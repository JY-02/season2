// SignUp.tsx

import React, { useState } from 'react';
import * as SignUpStyle from './SignUpStyle';
import Navbar from '../Navbar/Navbar';

interface PhoneNumber {
  areaCode: string;
  exchangeCode: string;
  subscriberNumber: string;
}

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const [id, setID] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<PhoneNumber>({
    areaCode: '',
    exchangeCode: '',
    subscriberNumber: '',
  });
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTermsRequired, setAgreeTermsRequired] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeEvent, setAgreeEvent] = useState(false);
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);

  const handleSignUp = () => {
    // 필수 항목 검사
    if (!id || !password || !confirmPassword || !username || !email) {
      alert('기본 가입 정보를 모두 입력해주세요.');
      return;
    }
  
    // 비밀번호 일치 검사
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  
    // 전화번호 검사
    if (!phoneNumber.areaCode || !phoneNumber.exchangeCode || !phoneNumber.subscriberNumber) {
      alert('전화번호를 입력해주세요.');
      return;
    }
  
    // 모든 약관 동의 검사
    if (!agreeTermsRequired || !agreePrivacy) {
      alert('모든 약관에 동의해야 합니다.');
      return;
    }
  
    console.log('회원가입 성공:', {
      id,
      username,
      email,
      password,
      confirmPassword,
      phoneNumber,
      agreeTermsRequired,
      agreePrivacy,
      agreeEvent,
    });
    setIsSignUpComplete(true); // 회원가입 완료 상태 업데이트
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof PhoneNumber) => {
    let value = e.target.value;

    // 숫자만 허용하도록 수정
    value = value.replace(/\D/g, '');

    // 길이 제한 설정
    const maxLength = key === 'areaCode' ? 3 : 4;
    value = value.slice(0, maxLength);

    setPhoneNumber((prev) => ({ ...prev, [key]: value }));
  };

  const handleAgreeAllChange = () => {
    const allChecked = !agreeAll;
    setAgreeAll(allChecked);
    setAgreeTermsRequired(allChecked);
    setAgreePrivacy(allChecked);
    setAgreeEvent(allChecked);
  };

  return (
    <SignUpStyle.Container>
      <Navbar />
      <h1>{isSignUpComplete ? '회원가입 완료' : '회원가입'}</h1>
      {isSignUpComplete ? (
        <p>회원가입이 완료되었습니다. 환영합니다!</p>
      ) : (
        <>
          <SignUpStyle.Divider />
          <SignUpStyle.Form>
            <SignUpStyle.Row>
              <SignUpStyle.Label>아이디　　　　</SignUpStyle.Label>
              <SignUpStyle.Input
                type="text"
                placeholder="아이디"
                value={id}
                onChange={(e) => setID(e.target.value)}
              />
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.Label>비밀번호　　　</SignUpStyle.Label>
              <SignUpStyle.Input
                type="password"
                placeholder="4~12자의 영문 대소문자, 숫자 조합"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.Label>비밀번호 확인</SignUpStyle.Label>
              <SignUpStyle.Input
                type="password"
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.Label>사용자 이름　　</SignUpStyle.Label>
              <SignUpStyle.Input
                type="text"
                placeholder="이름"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.Label>이메일　　　　</SignUpStyle.Label>
              <SignUpStyle.Input
                type="email"
                placeholder="이메일 (예 : abc1234@naver.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.Label>전화번호　　　</SignUpStyle.Label>
              <SignUpStyle.PhoneInputContainer>
                <SignUpStyle.PhoneInputBox>
                  <SignUpStyle.Input
                    type="tel"
                    placeholder="010"
                    maxLength={3}
                    value={phoneNumber.areaCode}
                    onChange={(e) => handleInputChange(e, 'areaCode')}
                  />
                </SignUpStyle.PhoneInputBox>
                <SignUpStyle.PhoneInputBox>
                  <SignUpStyle.Hyphen>-</SignUpStyle.Hyphen>
                  <SignUpStyle.Input
                    type="tel"
                    placeholder=""
                    maxLength={4}
                    value={phoneNumber.exchangeCode}
                    onChange={(e) => handleInputChange(e, 'exchangeCode')}
                  />
                </SignUpStyle.PhoneInputBox>
                <SignUpStyle.PhoneInputBox>
                  <SignUpStyle.Hyphen>-</SignUpStyle.Hyphen>
                  <SignUpStyle.Input
                    type="tel"
                    placeholder=""
                    maxLength={4}
                    value={phoneNumber.subscriberNumber}
                    onChange={(e) => handleInputChange(e, 'subscriberNumber')}
                  />
                </SignUpStyle.PhoneInputBox>
              </SignUpStyle.PhoneInputContainer>
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.CheckboxLabel>
                <SignUpStyle.Checkbox
                  type="checkbox"
                  checked={agreeAll}
                  onChange={handleAgreeAllChange}
                />
                전체동의
              </SignUpStyle.CheckboxLabel>
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.CheckboxLabel>
                <SignUpStyle.Checkbox
                  type="checkbox"
                  checked={agreeTermsRequired}
                  onChange={() => setAgreeTermsRequired(!agreeTermsRequired)}
                />
                (필수) 이용약관 동의
              </SignUpStyle.CheckboxLabel>
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.CheckboxLabel>
                <SignUpStyle.Checkbox
                  type="checkbox"
                  checked={agreePrivacy}
                  onChange={() => setAgreePrivacy(!agreePrivacy)}
                />
                (필수) 개인정보 수집 및 이용 동의
              </SignUpStyle.CheckboxLabel>
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.CheckboxLabel>
                <SignUpStyle.Checkbox
                  type="checkbox"
                  checked={agreeEvent}
                  onChange={() => setAgreeEvent(!agreeEvent)}
                />
                (선택) 이벤트 수신 동의
              </SignUpStyle.CheckboxLabel>
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.Button type="button" onClick={handleSignUp}>
                가입하기
              </SignUpStyle.Button>
            </SignUpStyle.Row>
          </SignUpStyle.Form>
        </>
      )}
    </SignUpStyle.Container>
  );
};

export default SignUp;
