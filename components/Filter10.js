import React from 'react'
import { Image, View } from 'react-native';

const Filter10 = ({
    face: {
        bounds: {
            size: { width: faceWidth, height: faceHeight }
        },
        leftEyePosition,
        rightEyePosition
    }
}) => {
    const other_1_Width = faceWidth
    const other_1_Height = faceHeight / 3

    const transformAngle = (
        angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))
    ) => angleRad * 180 / Math.PI

    return (    
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - other_2_Width * 0.675,
            top: leftEyePosition.y - other_2_Height * 0.5
        }}>
            <Image
                source={require('../assets/other-pic1.png')}
                style={{
                    width: other_1_Width,
                    height: other_1_Height,
                    resizeMode: 'contain',
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }}
            />
        </View>
    );
};

export default Filter10