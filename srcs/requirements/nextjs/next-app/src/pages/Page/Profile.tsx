import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import RootState from "@/redux/RootReducer";
import { fetchProfile, resetProfile } from "@/redux/Slice/Profile";
import LoadingSlice from "@/redux/Slice/Loading";
import H1 from "../PostComponents/H1";
import {
  Button,
  ScrollView,
  Tab,
  TabBody,
  Tabs,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import { Grid, Row } from "antd";
import UserInfo from "../profile/UserInfo";
import MyModal from "../globalComponents/MyModal";
import AppLayout from "../globalComponents/AppLayout";
import { AppDispatch } from "@/redux/RootStore";
import { mocUserData } from "@/moc/user";
import { getProfile } from "@/api/Profile";
import { useGetUserQuery } from "@/redux/Api/Profile"

const Profile = () => {
  const [state, setState] = useState({ activeTab: 0 });
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const {data, error, isLoading} = useGetUserQuery(1);

  const handleChange = (
    value: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setState({ activeTab: value });
  };


  const get = useCallback(async () => {

    console.log();
  }, [])

  useEffect(() => {
      console.log(data);
      get();
      return ;
  }, [get, data])

  const close = () => {
    dispatch(resetProfile());
    router.back();
  };

    return (
      <AppLayout>
        <MyModal hName="프로필" close={close}>
          <Tabs value={state.activeTab} onChange={handleChange}>
            <Tab value={0}>
              <span
                style={{
                  fontFamily: "dunggeunmo-bold",
                  fontSize: "22px",
                  width: "100px",
                }}
              >
                유저정보
              </span>
            </Tab>
            <Tab value={1}>
              <span
                style={{
                  fontFamily: "dunggeunmo-bold",
                  fontSize: "22px",
                  width: "100px",
                }}
              >
                게임로그
              </span>
            </Tab>
             (
              <Tab value={2}>
                <span
                  style={{
                    fontFamily: "dunggeunmo-bold",
                    fontSize: "22px",
                    width: "100px",
                  }}
                >
                  수정하기
                </span>
              </Tab>
            )
          </Tabs>
          <WindowContent>
            <Row>
              <ScrollView
                shadow={false}
                style={{ width: "100%", height: "44vh" }}
              >
                {state.activeTab === 0 && <UserInfo user={data} />}
                {state.activeTab === 1 && <H1>게임로그</H1>}
                {state.activeTab === 2 && <H1>프로필수정</H1>}
              </ScrollView>
            </Row>
          </WindowContent>
        </MyModal>
      </AppLayout>
    );

  return (
    <AppLayout>
      <MyModal hName="프로필" close={close}>
        <H1>유저를 선택하세요</H1>
      </MyModal>
    </AppLayout>
  );
};

export default Profile;
