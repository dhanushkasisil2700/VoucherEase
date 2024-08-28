import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, Extrapolate, withTiming, runOnJS } from 'react-native-reanimated';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);
  const animationValue = useSharedValue(0);

  const translateX = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: interpolate(animationValue.value, [0, 1, 2, 3, 4], [0, -width, -width * 2, -width * 3, -width * 4], Extrapolate.CLAMP) }],
    };
  });

  const slides = [
    {
      image: require('../assets/slideshow/1.png'),
      title: 'Slide 1 Title',
      description: 'Slide 1 Description',
    },
    {
      image: require('../assets/slideshow/1.png'),
      title: 'Slide 2 Title',
      description: 'Slide 2 Description',
    },
    {
      image: require('../assets/slideshow/3.png'),
      title: 'Slide 3 Title',
      description: 'Slide 3 Description',
    },
    {
      image: require('../assets/slideshow/4.png'),
      title: 'Slide 4 Title',
      description: 'Slide 4 Description',
    },
    {
      image: require('../assets/slideshow/3.png'),
      title: 'Slide 5 Title',
      description: 'Slide 5 Description',
    },
  ];

  const width = 300;
  const height = 200;

  const handleNextSlide = () => {
    const nextSlide = currentSlide === 4 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
    animationValue.value = nextSlide;
  };

  const handlePreviousSlide = () => {
    const previousSlide = currentSlide === 0 ? 4 : currentSlide - 1;
    setCurrentSlide(previousSlide);
    animationValue.value = previousSlide;
  };

  const handleSlidePress = () => {
    runOnJS(handleNextSlide)();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slideshow, translateX]}>
        {slides.map((slide, index) => (
          <TouchableOpacity key={index} onPress={handleSlidePress} style={styles.slide}>
            <Image source={slide.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.description}>{slide.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </Animated.View>
      <View style={styles.pagination}>
        <TouchableOpacity onPress={handlePreviousSlide}>
          <Text style={styles.paginationText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.paginationText}>
          {currentSlide + 1}/{slides.length}
        </Text>
        <TouchableOpacity onPress={handleNextSlide}>
          <Text style={styles.paginationText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  slideshow: {
    width: '100%',
    height: 200,
  },
  slide: {
    width: '100%',
    height: 200,
    position: 'absolute',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 300,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 14,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  paginationText: {
    color: 'white',
    fontSize: 20,
    margin: 10,
  },
});

export default Slideshow;
