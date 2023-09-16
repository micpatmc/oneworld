import { View, Text, TouchableOpacity, Image } from 'react-native';

const AddButton = () => {
    return (
        <TouchableOpacity 
            style={{
                position: 'absolute',
                backgroundColor: '#0000FF',
                bottom: 50,
                right: 25,
                width: 100,
                height: 100,
                borderRadius: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1
            }}>
            <Image
                source={(require('../assets/plus.png'))}
                style={{
                    width: 60,
                    height: 60
                }}
            />

        </TouchableOpacity>
    )
}

export default AddButton;