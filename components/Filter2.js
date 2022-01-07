import React from 'react'
import { Image, View } from 'react-native';

const Filter2 = ({
    face: {
        bounds: {
            size: { width: faceWidth, height: faceHeight }
        },
        leftEyePosition,
        rightEyePosition
    }
}) => {
    const crown_2_Width = faceWidth
    const crown_2_Height = faceHeight / 3

    const transformAngle = (
        angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))
    ) => angleRad * 180 / Math.PI

    return (    
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - crown_2_Width * 0.675,
            top: leftEyePosition.y - crown_1_Height * 0.5
        }}>
            <Image
                source={require('../assets/crown-pic2.png')}
                style={{
                    width: crown_2_Width,
                    height: crown_2_Height,
                    resizeMode: 'contain',
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }}
            />
        </View>
    );
};

export default Filter2