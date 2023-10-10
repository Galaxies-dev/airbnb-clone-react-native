import { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Colors from '@/constants/Colors';

const ModalHeaderText = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
      <TouchableOpacity onPress={() => setActive(0)}>
        <Text
          style={{
            fontFamily: 'mon-sb',
            fontSize: 18,
            color: active == 0 ? '#000' : Colors.grey,
            textDecorationLine: active == 0 ? 'underline' : 'none',
          }}>
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive(1)}>
        <Text
          style={{
            fontFamily: 'mon-sb',
            fontSize: 18,
            color: active == 1 ? '#000' : Colors.grey,
            textDecorationLine: active == 1 ? 'underline' : 'none',
          }}>
          Experiences
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeaderText;
