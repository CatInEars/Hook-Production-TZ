import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';

export function Anchors() {
  return (
    <View style={commonStyles.productAnchorsContainer}>
      <View>
        <Text style={commonStyles.productAnchorsText}>
          Nutrition
        </Text>
      </View>

      <View>
        <Text style={commonStyles.productAnchorsText}>
          Ingredients
        </Text>
      </View>

      <View>
        <Text style={commonStyles.productAnchorsText}>
          Other
        </Text>
      </View>
    </View>
  );
}