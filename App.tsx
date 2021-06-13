/*   
*
*                     CatInEars             
*       My GitHub: https://github.com/CatInEars
*         Technical Task for Hook Production
*
*/

import React from 'react';
import { Main } from './src/index';
import { Provider } from 'react-redux';
import { globalState } from './src/modules/store/globalState';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={globalState}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}