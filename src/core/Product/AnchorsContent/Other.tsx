import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';
import { otherContentArr } from '../../../modules/otherContentArr';

export function Other() {
  return (
    <View>
      <Text style={commonStyles._anchorsTitle}>
        Other
      </Text>

      <View style={{marginVertical: 16}}>
        {
          otherContentArr.map((item, index) => (
            <View 
              style={commonStyles.otherTableStroke}
              key={`tableItem-${index}`}
            >
              <View style={{width: '50%'}}>
                <Text style={commonStyles.otherTableQuest}>
                  {item.quest}
                </Text>
              </View>

              <View style={{width: '50%'}}>
                <Text style={commonStyles.otherTableAsw}>
                  {item.asw}
                </Text>
              </View>
            </View>
          ))
        }
      </View>
    </View>
  );
}