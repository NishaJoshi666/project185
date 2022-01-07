
import React from 'react'
import { Image, View } from 'react-native';

const Filter7 = ({
    face: {
        bounds: {
            size: { width: faceWidth, height: faceHeight }
        },
        leftEyePosition,
        rightEyePosition
    }
}) => {
    const hair_1_Width = faceWidth
    const hair_1_Height = faceHeight / 3

    const transformAngle = (
        angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))
    ) => angleRad * 180 / Math.PI

    return (    
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - hair_2_Width * 0.675,
            top: leftEyePosition.y - hair_2_Height * 0.5
        }}>
            <Image
                source={require('../assets/hair-pic1.png')}
                style={{
                    width: hair_2_Width,
                    height: hair_2_Height,
                    resizeMode: 'contain',
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }}
            />
        </View>
    );
};

export default Filter7