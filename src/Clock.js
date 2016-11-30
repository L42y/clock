import React, {Component} from 'react';
import {Flex, Block} from 'jsxstyle';

const clockRadius = 100;

export default class Clock extends Component {
  state = {
    seconds: 0
  };

  componentDidMount() {
    this.tick();
  }

  tick() {
    this.interval = setInterval(() => {
      const {seconds} = this.state;

      this.setState({
        seconds: seconds + 1
      });
    }, 1000);
  }

  render() {
    const {seconds} = this.state;
    const currentSeconds = seconds % 60;
    const currentMinutes = Math.floor(seconds / 60) % 60;
    const currentHours = Math.floor(currentMinutes / 60) % 12;

    return (
      <Flex width={clockRadius * 2}
            height={clockRadius * 2}
            border="1px solid pink"
            position="relative"
            borderRadius="50%"
            background="ivory"
            alignItems="center"
            justifyContent="center">
        <Flex top="0"
              left="0"
              right="0"
              width="1"
              height={clockRadius * 2}
              margin="auto"
              position="absolute"
              transform={`rotate(${currentSeconds * 6}deg)`}>
          <Block width="100%"
                 height="50%"
                 background="red"/>
        </Flex>

        <Flex top="20"
              left="0"
              right="0"
              width="2"
              height={clockRadius * 2 - 40}
              margin="auto"
              position="absolute"
              transform={`rotate(${currentMinutes * 6}deg)`}>
          <Block width="100%"
                 height="50%"
                 background="gray"/>
        </Flex>

        <Flex top="40"
              left="0"
              right="0"
              width="4"
              height={clockRadius * 2 - 80}
              margin="auto"
              position="absolute"
              transform={`rotate(${currentHours * 6}deg)`}>
          <Block width="100%"
                 height="50%"
                 background="black"/>
        </Flex>

        <Block width={10}
               height={10}
               zIndex={1}
               transformOrigin="0"
               background="gray"
               borderRadius="50%"/>
      </Flex>
    );
  }
}
