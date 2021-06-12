import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../../common/commonStyles';
import { CartInteraction } from '../../components/CartInteraction';

interface IProps {
  product: IProduct
}
function productInfo({ product }: IProps) {
  return (
    <View style={commonStyles.productNameContainer}>
      <Text style={commonStyles.productNameText}>
        {product.name}
      </Text>

      <Text style={commonStyles.productCountPrice}>
        {product.count} / {product.currency}{product.price}
      </Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={commonStyles.productPrice}>
          {product.currency}{product.price}
        </Text>

        <CartInteraction 
          id={product.id}
          width={45}
          height={45}
        />
      </View>

      <View 
        style={commonStyles.productLine}
      />
    </View>
  );
}

export const ProductName = connect(
  (state: IState) => ({
    product: state.productData
  })
)(productInfo);