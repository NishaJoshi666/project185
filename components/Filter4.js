import React from 'react'
import { Image, View } from 'react-native';

const Filter4 = ({
    face: {
        bounds: {
            size: { width: faceWidth, height: faceHeight }
        },
        leftEyePosition,
        rightEyePosition
    }
}) => {
    const flower_1_Width = faceWidth
    const flower_1_Height = faceHeight / 3

    const transformAngle = (
        angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))
    ) => angleRad * 180 / Math.PI

    return (    
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - flower_1_Width * 0.675,
            top: leftEyePosition.y - flower_1_Height * 0.5
        }}>
            <Image
                source={require('../assets/flower-pic1.png')}
                style={{
                    width: flower_1_Width,
                    height: flower_1_Height,
                    resizeMode: 'contain',
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }}
            />
        </View>
    );
};

export default Filter1