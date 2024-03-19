import { useState } from 'react';
import AlarmSetter from '@/components/AlarmSetter';

const Home = () => {
  const [alarmTime, setAlarmTime] = useState('');

  const handleSetAlarm = (time: string) => {
    setAlarmTime(time);
    alert(`알람이 ${time}으로 설정되었습니다. 잘 준비하세요!`);
  };

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
