import React from 'react'
import { Image, View } from 'react-native';

const Filter3 = ({
    face: {
        bounds: {
            size: { width: faceWidth, height: faceHeight }
        },
        leftEyePosition,
        rightEyePosition
    }
}) => {
    const crown_3_Width = faceWidth
    const crown_3_Height = faceHeight / 3

    const transformAngle = (
        angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))
    ) => angleRad * 180 / Math.PI

    return (    
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - crown_3_Width * 0.675,
            top: leftEyePosition.y - crown_3_Height * 0.5
        }}>
            <Image
                source={require('../assets/crown-pic3.png')}
                style={{
                    width: crown_3_Width,
                    height: crown_3_Height,
                    resizeMode: 'contain',
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }}
            />
        </View>
    );
};

export default Filter1