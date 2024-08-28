import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Import vector icons library

const FAQ = () => {
  // State to manage the expanded status of each FAQ item
  const [expanded, setExpanded] = useState([true, false, false]); // Initialize the first item as expanded

  // Function to handle expanding/collapsing an FAQ item
  const handleExpand = (index) => {
    // Update the expanded state for the clicked item
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  // Array of FAQ items with questions and answers
  const faqItems = [
    {
      question: 'What is the purpose of this app?',
      answer: 'This app is designed to help users find and connect with local businesses.'
    },
    {
      question: 'How do I use this app?',
      answer: 'Simply browse through the categories, search for specific businesses, or view recommendations.'
    },
    {
      question: 'Is this app free to use?',
      answer: 'Yes, this app is completely free to use.'
    }
  ];

  return (
    <View style={styles.container}>
      {/* Loop through each FAQ item */}
      {faqItems.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          {/* TouchableOpacity for interactive question */}
          <TouchableOpacity
            style={styles.questionContainer}
            onPress={() => handleExpand(index)}
          >
            <Text style={styles.question}>{item.question}</Text>
            {/* Display arrow icon, changing color based on expanded state */}
            <Entypo
              name={expanded[index] ? 'chevron-up' : 'chevron-down'}
              size={20}
              color={expanded[index] ? 'blue' : 'gray'} // Change icon color for active item
            />
          </TouchableOpacity>
          {/* Display answer if the corresponding item is expanded */}
          {expanded[index] && (
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>{item.answer}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  faqItem: {
    marginBottom: 5
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  answerContainer: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5
  },
  answer: {
    fontSize: 14
  }
});

export default FAQ;