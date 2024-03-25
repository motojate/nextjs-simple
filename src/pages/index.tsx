import { useState } from 'react';
import AlarmSetter from '@/components/AlarmSetter';

const Home = () => {
  const [alarmTime, setAlarmTime] = useState('');

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
