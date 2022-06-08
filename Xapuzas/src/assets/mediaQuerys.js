import StyleSheet from 'react-native-media-query';

export const media = StyleSheet.create({

    helpModal:{
        backgroundColor: 'white',
        borderRadius:10,
        borderWidth:2,
        borderColor: '#F6D6B8',
        marginHorizontal: 30,
        '@media (max-height:1000px) and (min-height:751px)':{
        },
        '@media (max-height:750px)':{
            marginTop: 50
        },
    },

    helpTrModal:{
        backgroundColor: 'white',
        borderRadius:10,
        borderWidth:2,
        borderColor: '#F6D6B8',
        marginHorizontal: 30,
        //mi movil y un poco más pequeños hacia arriba
        '@media (max-height:1000px) and (min-height:751px)':{    
            marginTop: 100,
        },
        //mas pequeños que mi movil
        '@media (max-height:750px)':{
            marginTop: 150
        },
    },

    helpAjModal:{
        backgroundColor: 'white',
        borderRadius:10,
        borderWidth:2,
        borderColor: '#F6D6B8',
        marginHorizontal: 30,
        '@media (max-height:1000px) and (min-height:751px)':{
            marginTop: 300
        },
        '@media (max-height:750px)':{
            marginTop: 350
        },
    },
    helpTAjModal:{
        backgroundColor: 'white',
        borderRadius:10,
        borderWidth:2,
        borderColor: '#F6D6B8',
        marginHorizontal: 30,
        '@media (max-height:1000px) and (min-height:751px)':{
            marginTop: 350
        },
        '@media (max-height:750px)':{
            marginTop: 400
        },
    },
    helpCTar:{
        backgroundColor: 'white',
        borderRadius:10,
        borderWidth:2,
        borderColor: '#F6D6B8',
        marginHorizontal: 30,
        //mi movil y un poco más pequeños hacia arriba
        '@media (max-height:1000px) and (min-height:751px)':{    
            marginTop: 330,
        },
        //mas pequeños que mi movil
        '@media (max-height:750px)':{
            marginTop: 350
        },
    }

})