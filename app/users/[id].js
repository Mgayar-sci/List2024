import { useLocalSearchParams } from 'expo-router';
import UserTodos from '../../Components/UserTodos';

export default function Page() {
  const { id } = useLocalSearchParams();

  return <UserTodos userId={id} />;
}