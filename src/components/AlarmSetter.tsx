import { HOUR_DATA, MINUTE_DATA } from '@/common/constants';
import { Dispatch, SetStateAction, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const AlarmSetter = ({
  onSetAlarm,
}: {
  onSetAlarm: Dispatch<SetStateAction<string>>;
}) => {
  const [meridiem, setMeridiem] = useState<string>('오전');
  const [hour, setHour] = useState<string>('01');
  const [minute, setMinute] = useState<string>('00');

  const clickMerdiem = (meridiem: string) => {
    setMeridiem(meridiem);
  };

  const clickHour = (hour: string) => {
    setHour(hour);
  };

  const clickMinute = (minute: string) => {
    setMinute(minute);
  };

  const createTodayWithTime = (hours: number, minutes: number) => {
    const now = new Date();
    now.setHours(hours, minutes, 0, 0);
    return now;
  };

  const setAlarm = () => {
    const newHour = meridiem === '오후' ? +hour + 12 : hour;
    const data = `${newHour} : ${minute}`;

    const dateData = createTodayWithTime(+newHour, +minute);
    onSetAlarm(data);
    window.alert('알람이 설정되었습니다.');
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: 'ALARM',
          time: `${dateData}`,
        }),
      );
    } else {
      window.alert('모바일이 아닙니다.');
    }
  };

  return (
    <>
      <Swiper>
        {['오전', '오후'].map((data, idx) => (
          <SwiperSlide key={idx} onClick={() => clickMerdiem(data)}>
            <div className={data === meridiem ? 'text-blue' : 'text-gray'}>
              {data}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <hr />
      <Swiper spaceBetween={10} slidesPerView={3}>
        {HOUR_DATA.map((data, idx) => (
          <SwiperSlide key={idx} onClick={() => clickHour(data)}>
            <div className={data === hour ? 'text-blue' : 'text-gray'}>
              {data}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <hr />
      <Swiper spaceBetween={10} slidesPerView={10}>
        {MINUTE_DATA.map((data, idx) => (
          <SwiperSlide key={idx} onClick={() => clickMinute(data)}>
            <div className={data === minute ? 'text-blue' : 'text-gray'}>
              {data}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <hr />
      <button onClick={setAlarm}>저장하기</button>
    </>
  );
};

export default AlarmSetter;
