import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { app } from "../firbase";
import { onValue, getDatabase, ref, remove } from "firebase/database";

export default function Cart() {
  const [mycart, setMyCart] = useState([]);
  
  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "cart");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMyCart(Object.keys(data).map(key => ({ key, ...data[key] })));
      } else {
        setMyCart([]);
      }
    });
  }, []);

  const handleDelete = (itemKey) => {
    const db = getDatabase(app);
    const itemRef = ref(db, `cart/${itemKey}`);
    remove(itemRef)
      .then(() => {
        console.log('Item removed successfully!');
        // Optionally update local state to reflect removal
        setMyCart(prevCart => prevCart.filter(item => item.key !== itemKey));
      })
      .catch((error) => {
        console.error('Error removing item:', error);
      });
  };

  const setTotalperItem = (quant, price) => quant * price;

  const totalprice = mycart.reduce((total, item) => total + (item.quant * item.price), 0);

  return (
    <View className="flex flex-1 w-full m-0 bg-black mt-4">
      <FlatList
        data={mycart}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View className="bg-neutral-700 flex flex-row border-0 rounded-3xl p-0  mt-2 justify-around ">
              <View className='justify-start items-start mr-2'>
              <Image
              source={{ uri: item.img }}
              style={{
                width: 140,
                height: 120,
                borderRadius: 25,
                resizeMode: "cover",
              }} 
            ></Image>
              </View>
            <View className=" flex  p-0 ml-1 mt-1  ">
              <View className="flex flex-row mt-1 justify-around w-max">
                <Text className="text-white text-base">Title : </Text>
                <Text className="text-base text-white text-left">
                  {item.title}
                </Text>
              </View>
              <View className="flex flex-row mt-2 space-x-8">
                <Text className="text-white text-base">Items :</Text>
                <Text className="text-base text-white text-left">
                  {item.quant}
                </Text>
              </View>
              <View
                style={{ height: 1, backgroundColor: "white" }}
                className="w-full mt-2"
              ></View>
              <View className="flex bottom-0 flex-row mt-5 space-x-8">
                <Text className="text-white text-base">Price :</Text>

                <Text className="text-base text-white text-left">
                  {setTotalperItem(item.quant, item.price)}
                </Text>
              </View>
            </View>
            <View className=' justify-end items-end ml-10'>
              <TouchableOpacity
                className=' bottom-0 mt-12  mr-7 '
                onPress={() => handleDelete(item.key)}
              >
                <Ionicons name="trash-outline" size={20} color="rgb(255,70,70)" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View className="flex flex-row bottom-1 bg-neutral-800 border-0 rounded-2xl w-full h-12 justify-around items-center">
        <Text className="font-bold text-xl text-white ml-2">Total</Text>
        <Text className="font-bold text-xl text-white">RS. {totalprice}</Text>
        <TouchableOpacity className="bg-green-700 w-24 rounded-full justify-center items-center h-10">
          <Text className="text-white text-base">Click to Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
