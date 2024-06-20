import { Image, View, StyleSheet, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';

import PrimeVideo from "../../assets/prime_video.png"
import AmazonLogo from "../../assets/amazon_logo.png"
import MovieTheWell from "../../assets/movies/the_wheel_of_time.png"
import { MOVIESWATCHING } from '../../utils/moviesWatching';
import { MoviesCard } from '../../componentes/MoviesCards/filmes';
import { MOVIESCRIME } from '../../utils/moviesCrimes';
import { MOVIESWATCH } from '../../utils/moviesWatch';



export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideo} />
                <Image style={styles.amazonLogoImg} source={AmazonLogo} />

            </View>

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.movieImage1}>
                <Image source={MovieTheWell} style={styles.movieImage} />
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>

            <Text style={styles.movieText}>Continue Assistindo</Text>
            
            <FlatList
            data={MOVIESWATCHING}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <MoviesCard movieURL = {item.moviesURL} />}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
            
            />
            <Text style={styles.movieText}>Crime Movies</Text>
            
            <FlatList
            data={MOVIESCRIME}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <MoviesCard movieURL = {item.moviesURL} />}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
            
            />
            <Text style={styles.movieText}>Watch in your language</Text>
            
            <FlatList
            data={MOVIESWATCH}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <MoviesCard movieURL = {item.moviesURL} />}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
            
            />
            </ScrollView>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start"
    },

    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center"
    },

    amazonLogoImg: {
        marginTop: -35,
        marginLeft: 40,
    },

    primeLogoImg:{
        marginTop: -45,
        marginLeft: 30,
    },

    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
    },

    categoryText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#ffff"

    },
   
    movieText:{
        color: "#ffff",
        fontSize: 18,
        fontWeight: "700",
        padding: 15,
        
    },


    movieImage1: {
        width: "100%",
        alignItems: "center",
    },
    contentList: {
        paddingLeft: 1,
        paddingRight: 30,
    },
    contentMovies:{

    }
});