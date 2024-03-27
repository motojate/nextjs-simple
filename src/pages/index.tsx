import { useEffect, useState } from 'react';
import AlarmSetter from '@/components/AlarmSetter';

const Home = () => {
  const [alarmTime, setAlarmTime] = useState('');

  useEffect(() => {
    const handleMessage = (event: any) => {
      // 메시지 수신 시 로그를 찍어 확인합니다.
      console.log('Received message: ', event.data);
    };

    window.addEventListener('message', handleMessage, false);

    // 클린업 함수에서 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('message', handleMessage, false);
    };
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 space-y-8">
      <AlarmSetter onSetAlarm={setAlarmTime} />
      <br />
      <br />
      {alarmTime && <div className="text-center">알람 시간: {alarmTime}</div>}
    </div>
  );
};

export default Home;
