/*
 * Copyright (c) 2020. PCN-DXMB / AsahiLuxstay / TuanLV@ViralSoft
 */

import React, {PureComponent} from 'react';
import {style} from './style';
import {Container, Text} from 'native-base';
import {NavProps} from '../../utilities/models';

interface @{screen}ScreenProps extends NavProps {}
interface @{screen}ScreenState {}
class @{screen}Screen extends PureComponent<
  @{screen}ScreenProps,
  @{screen}ScreenState
> {
  state: @{screen}ScreenState = {};
  render() {
    return (
      <Container style={style.containerStyle}>
        <Text>{'Hello @{screen}'}</Text>
      </Container>
    );
  }
}

export default @{screen}Screen;
