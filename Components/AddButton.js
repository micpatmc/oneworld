import { View, Text, TouchableOpacity, Image } from 'react-native';

const AddButton = () => {
    return (
        <TouchableOpacity 
            style={{
                position: 'absolute',
                backgroundColor: '#fff',
                bottom: 50,
                right: 25,
                width: 80,
                height: 80,
                borderRadius: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1
            }}>
            <Image
                source={(require('../assets/plus.png'))}
                style={{
                    width: 40,
                    height: 40
                }}
            />

        </TouchableOpacity>
    )
}

export default AddButton;