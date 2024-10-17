// BasicInfo.tsx
import React, { useState } from "react";
import * as C from "../../pages/StoryFlow/container";
import * as Styles from "./BasicInfoStyle";
import { useNavigate } from "react-router-dom";
import Label from "./Label";
import axios from "axios";

interface FormData {
  name: string;
  gender: string;
  age: number;
  personality: string;
  story: string;
}

interface UserFormProps {
  onSubmit: (data: FormData) => void;
}

const BasicInfo: React.FC<UserFormProps> = () => {
  const navigate = useNavigate();
  const currentPage = "BasicInfo";
  const [formData, setFormData] = useState<FormData>({
    name: "",
    gender: "",
    age: 1,
    personality: "",
    story: ""
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "age") {
      const parsedValue = parseInt(value, 10);
      if (!isNaN(parsedValue)) {
        setFormData({ ...formData, [name]: parsedValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleGenderChange = (gender: string) => {
    setFormData({ ...formData, gender });
  };

  const handleNextBtnClick = () => {
    if (validateFormData()) {
      // Prepare data to send to the server
      const requestData = {
        nickname: "userNickname", // Replace with actual user nickname if applicable
        name: formData.name,
        gender: formData.gender,
        age: formData.age,
        personality: formData.personality,
        story: formData.story
      };

      // Make POST request using axios
      axios
        .post("http://localhost:8000/genius/intro/basicInfo/", requestData)
        .then((response) => {
          console.log("POST 성공:", response.data);
          // Navigate to the next page after successful submission if needed
          navigate(`/ChatDC`);
        })
        .catch((error) => {
          console.error("POST 실패:", error);
          // Handle error as needed, e.g., show an error message
          alert("데이터 제출에 실패했습니다. 다시 시도해주세요.");
        });
    } else {
      alert("주인공에 대한 정보를 모두 입력해주세요!");
    }
  };

  const validateFormData = () => {
    return (
      formData.name !== "" &&
      formData.gender !== "" &&
      formData.personality !== "" &&
      formData.story !== ""
    );
  };

  return (
    <Styles.Container>
      <C.Header currentPage={currentPage} />
      <Styles.Title>주인공에 대해 알려줘!</Styles.Title>
      <Styles.BtnContainer>
        <Styles.OkBtn onClick={() => navigate(`/`)}>이전 단계로</Styles.OkBtn>
        <Styles.NoBtn onClick={handleNextBtnClick}>다음 단계로</Styles.NoBtn>
      </Styles.BtnContainer>
      <Styles.FormContainer>
        <Label
          labelText="주인공의 이름"
          inputType="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="예시) 김미미"
        />
        <Label
          labelText="주인공의 성별"
          inputType="select"
          name="gender"
          value={formData.gender}
          onChange={(e) => handleGenderChange(e.target.value)}
          options={[
            { value: "", label: "성별을 선택하세요" },
            { value: "Male", label: "남자" },
            { value: "Female", label: "여자" },
            { value: "Other", label: "설정안함" }
          ]}
        />
        <Label
          labelText="주인공의 나이"
          inputType="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <Label
          labelText="주인공의 성격"
          inputType="text"
          name="personality"
          value={formData.personality}
          onChange={handleChange}
          placeholder="예시) 용감하고 당돌한"
        />
        <Label
          labelText="넣고 싶은 이야기"
          inputType="textarea"
          name="story"
          value={formData.story}
          onChange={handleChange}
          placeholder="예시) 김미미가 &#13;&#10; 용을 물리치는 이야기"
        />
      </Styles.FormContainer>
    </Styles.Container>
  );
};

export default BasicInfo;
