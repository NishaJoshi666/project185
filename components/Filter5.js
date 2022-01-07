import React from 'react'
import { Image, View } from 'react-native';

const Filter5 = ({
    face: {
        bounds: {
            size: { width: faceWidth, height: faceHeight }
        },
        leftEyePosition,
        rightEyePosition
    }
}) => {
    const flower_2_Width = faceWidth
    const flower_2_Height = faceHeight / 3

    const transformAngle = (
        angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))
    ) => angleRad * 180 / Math.PI

    return (    
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - flower_2_Width * 0.675,
            top: leftEyePosition.y - flower_2_Height * 0.5
        }}>
            <Image
                source={require('../assets/flower-pic2.png')}
                style={{
                    width: flower_2_Width,
                    height: flower_2_Height,
                    resizeMode: 'contain',
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }}
            />
        </View>
    );
};

export default Filter5