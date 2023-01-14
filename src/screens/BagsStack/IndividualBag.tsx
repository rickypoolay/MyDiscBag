import React, { useEffect } from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DiscCard from '../../components/DiscCard';
import Header from '../../components/Header';
import { colors, typographyStyles, globalStyles } from '../../styles/Index';

export default function IndividualBag(navStack: any) {
  interface discData {
    id: number;
    brand: string;
    discName: string;
    speed: string;
    glide: string;
    turn: string;
    fade: string;
  }

  const bagData = navStack.route.params.bagData.item;
  const discData = [
    {
      id: 1,
      brand: 'Innova',
      discName: 'Destroyer',
      speed: '12',
      glide: '5',
      turn: '-1',
      fade: '6',
    },
    {
      id: 2,
      brand: 'Innova',
      discName: 'Destroyer',
      speed: '12',
      glide: '5',
      turn: '-1',
      fade: '6',
    },
    {
      id: 3,
      brand: 'Innova',
      discName: 'Destroyer',
      speed: '12',
      glide: '5',
      turn: '-1',
      fade: '6',
    },
    {
      id: 4,
      brand: 'Innova',
      discName: 'Destroyer',
      speed: '12',
      glide: '5',
      turn: '-1',
      fade: '6',
    },
    {
      id: 5,
      brand: 'Innova',
      discName: 'Destroyer',
      speed: '12',
      glide: '5',
      turn: '-1',
      fade: '6',
    },
    {
      id: 6,
      brand: 'Innova',
      discName: 'Destroyer',
      speed: '12',
      glide: '5',
      turn: '-1',
      fade: '6',
    },
    {
      id: 7,
      brand: 'Innova',
      discName: 'Destroyer',
      speed: '12',
      glide: '5',
      turn: '-1',
      fade: '6',
    },
  ];

  const formatData = (discData: any, numColumns: number) => {
    const numberOfFullRows = Math.floor(discData.length / numColumns);

    let numberofElementsLastRow =
      discData.length - numberOfFullRows * numColumns;
    while (
      numberofElementsLastRow !== numColumns &&
      numberofElementsLastRow !== 0
    ) {
      discData.push({
        id: `blank-${numberofElementsLastRow}`,
        empty: true,
      });
      numberofElementsLastRow = numberofElementsLastRow + 1;
    }

    return discData;
  };
  const numColumns = 3;
  useEffect(() => {
    navStack.navigation.setOptions({
      header: (e: any) => (
        <Header stackNavigation={e} customTitle={bagData.bagName} />
      ),
    });
  }, []);

  return (
    <View style={globalStyles.pageContainer}>
      <Text style={{ ...typographyStyles.Header1, textAlign: 'center' }}>
        {/* If json contains drivers then render and etc.. for other categories */}
        Discs
      </Text>
      <FlatList
        data={formatData(discData, numColumns)}
        style={styles.container}
        renderItem={({ item }) => {
          if (item.empty) {
            return (
              <View
                style={[
                  styles.individualDiscCard,
                  styles.individualDiscCardInvisible,
                ]}
              />
            );
          }
          return <DiscCard styles={styles} disc={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  individualDiscCard: {
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 3,
    marginBottom: 12,
    height: Dimensions.get('window').width / 2,
    borderRadius: 12,
    padding: 12,
  },
  text: {
    color: '#FFFFFF',
    paddingHorizontal: 4,
  },
  discStats: {
    marginTop: 6,
    flexDirection: 'row',
  },
  individualDiscCardInvisible: {
    // when user has more discs than multiples of 6 the card will not show
    backgroundColor: 'transparent',
  },
  heartIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
});
