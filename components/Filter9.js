import React from 'react'
import { Image, View } from 'react-native';

const Filter9 = ({
    face: {
        bounds: {
            size: { width: faceWidth, height: faceHeight }
        },
        leftEyePosition,
        rightEyePosition
    }
}) => {
    const hat_2_Width = faceWidth
    const hat_2_Height = faceHeight / 3

    const transformAngle = (
        angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))
    ) => angleRad * 180 / Math.PI

    return (    
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - hat_2_Width * 0.675,
            top: leftEyePosition.y - hat_2_Height * 0.5
        }}>
            <Image
                source={require('../assets/hat-pic2.png')}
                style={{
                    width: hat_2_Width,
                    height: hat_2_Height,
                    resizeMode: 'contain',
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }}
            />
        </View>
    );
};

export default Filter9