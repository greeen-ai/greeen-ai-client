import Reactotron, {networking} from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'greeenai',
  })
  .useReactNative({
    asyncStorage: true,
  })
  .use(networking())
  .connect();
