// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Alert,
//   TouchableOpacity,
//   ImageBackground,
//   Image,
// } from "react-native";

// import { useNavigation } from "@react-navigation/native";

// export default function HomeScreen() {
//   const navigation = useNavigation();
//   const handleCategories = () => {
//     navigation.navigate("categories");
//   };
//   const handleMenu = () => {
//     navigation.navigate("Menu");
//   };
//   const handleDeals = () => {
//     navigation.navigate("deals");
//   };
//   const handleRecipies = () => {
//     navigation.navigate("recipie");
//   };
//   return (
//     <View className="flex-1  justify-center items-center w-full m-0 p-0 bg-black text-white">
//       <View className="flex-1  justify-center items-center   p-0 mt-0  ">
//        <View className='block border-0  rounded-b-3xl overflow-hidden' style={{borderBottomLeftRadius:40,borderBottomRightRadius:40}}>
//        <ImageBackground
//           source={require("../Images/Background.jpg")}
//           resizeMode="cover"
          
//           style={{width:385 , height:200}}
//         >
//           <Text className='text-white text-right mr-1 mt-14 italic text-xl '>Rise and grind,</Text>
//           <Text className='text-white text-right mr-1  italic text-xl '>it's coffee time!</Text>
//         </ImageBackground>
//        </View>
      
//       <View className='flex-1  w-full space-y-0  border-0 rounded-t-3xl  mt-1 ' style={{borderTopLeftRadius:40,borderTopRightRadius:40}}>

//           <View className='flex-1 flex-row justify-around space-x-6 overflow-hidden  mt-4 '>
//            <TouchableOpacity onPress={handleCategories}>
//            <View className=' block border-0   p-1 rounded-3xl bg-neutral-800 ml-4'>
//               <Image className='border-0 rounded-3xl' style={{width:175,height:215,resizeMode:'cover'}} source={require('../Images/1.jpg')}></Image>
//               <Text className='text-left  text-base text-white m-1 ml-3'>Categories</Text>
//             </View>
//            </TouchableOpacity>
//            <TouchableOpacity onPress={handleMenu}>
//             <View className='block border-0  p-1 rounded-3xl bg-neutral-800 mr-4'>
//               <Image className='border-0 rounded-3xl' style={{width:175,height:215,resizeMode:'cover'}} source={require('../Images/Menu.jpg')}></Image>
//               <Text className='text-left text-base text-white m-1 ml-3'>Menu</Text>
//             </View>
//             </TouchableOpacity>
//           </View>

//           <View className='flex-1 flex-row justify-around space-x-6 overflow-hidden  '>
//           <TouchableOpacity onPress={handleDeals}>
//             <View className=' block border-0  p-1 rounded-3xl bg-neutral-800 ml-4'>
//               <Image className='border-0 rounded-3xl' style={{width:175,height:215,resizeMode:'cover'}} source={require('../Images/deals.jpg')}></Image>
//               <Text className='text-left text-base text-white m-1 ml-3'>Deals</Text>
//             </View>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleRecipies}>
//             <View className='block border-0  p-1 rounded-3xl bg-neutral-800 mr-4'>
//               <Image className='border-0 rounded-3xl' style={{width:175,height:215,resizeMode:'cover'}} source={require('../Images/recipie.jpg')}></Image>
//               <Text className='text-left text-base text-white m-1 ml-3'>Recipies</Text>
//             </View>
//             </TouchableOpacity>
//           </View>
//         {/* <TabBarnavigation/> */}
//       </View>
    
//       </View>
      
   
//     </View>
    
//   );
// }


// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Alert,
//   TouchableOpacity,
//   ImageBackground,
//   Image,
// } from "react-native";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { useNavigation } from "@react-navigation/native";

// export default function HomeScreen() {
//   const navigation = useNavigation();
//   const handleCategories = () => {
//     // navigation.navigate("categories");
//     navigation.navigate("Speciality");
//   };
//   const handleMenu = () => {
//     navigation.navigate("Menu");
//   };
//   const handleDeals = () => {
//     navigation.navigate("deals");
//   };
//   const handleAbout = () => {
//     // navigation.navigate("recipie");
//     navigation.navigate("AboutUs");
//   };
//   return (
//     <View className="flex-1  justify-center items-center w-full m-0 p-0 bg-black text-white">
//       <View className="flex-1  justify-center items-center   p-0 mt-0  ">
//        <View className='block border-0  rounded-b-3xl overflow-hidden' style={{ borderBottomLeftRadius:40,borderBottomRightRadius:40}}>
//        <ImageBackground
//           source={require("../Images/Background.jpg")}
//           resizeMode="cover"
          
//           //style={{width:385 , height:200}}
//           style={{width: wp('100%'), height: hp('26%')}}
//         >
//           <Text className='text-white text-right mr-1 mt-14 italic text-xl '>Rise and grind,</Text>
//           <Text className='text-white text-right mr-1  italic text-xl '>it's coffee time!</Text>
//         </ImageBackground>
//        </View>
      
//       <View className='flex-1  w-full space-y-0  border-0 rounded-t-3xl  mt-1' style={{borderTopLeftRadius:40,borderTopRightRadius:40}}>

//           <View className='flex-1 flex-row justify-around space-x-6 overflow-hidden  mt-4 '>
//            <TouchableOpacity onPress={handleCategories}>
//            <View className=' block border-0   p-1 rounded-3xl bg-neutral-800 ml-4'>
//               <Image className='border-0 rounded-3xl' style={{width: wp('45%'),height: hp('28%'),resizeMode:'cover'}} source={require('../Images/1.jpg')}></Image>
//               <Text className='text-left  text-base text-white m-1 ml-3'>Our Speciality</Text>
//             </View>
//            </TouchableOpacity>
//            <TouchableOpacity onPress={handleMenu}>
//             <View className='block border-0  p-1 rounded-3xl bg-neutral-800 mr-4'>
//               <Image className='border-0 rounded-3xl' style={{width: wp('45%'),height: hp('28%'),resizeMode:'cover'}} source={require('../Images/Menu.jpg')}></Image>
//               <Text className='text-left text-base text-white m-1 ml-3'>Menu</Text>
//             </View>
//             </TouchableOpacity>
//           </View>

//           <View className='flex-1 flex-row justify-around space-x-6 overflow-hidden  '>
//           <TouchableOpacity onPress={handleDeals}>
//             <View className=' block border-0  p-1 rounded-3xl bg-neutral-800 ml-4'>
//               <Image className='border-0 rounded-3xl' style={{width: wp('45%'),height: hp('28%'),resizeMode:'cover'}} source={require('../Images/deals.jpg')}></Image>
//               <Text className='text-left text-base text-white m-1 ml-3'>Deals</Text>
//             </View>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleAbout}>
//             <View className='block border-0  p-1 rounded-3xl bg-neutral-800 mr-4'>
//               <Image className='border-0 rounded-3xl' style={{width: wp('45%'),height: hp('28%'),resizeMode:'cover'}} source={require('../Images/cafe1.jpg')}></Image>
//               <Text className='text-left text-base text-white m-1 ml-3'>About</Text>
//             </View>
//             </TouchableOpacity>
//           </View>
//         {/* <TabBarnavigation/> */}
//       </View>
    
//       </View>
      
   
//     </View>
    
//   );
// }


import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  handleCategories = () => {
    this.props.navigation.navigate("Speciality");
  };

  handleMenu = () => {
    this.props.navigation.navigate("Menu");
  };

  handleDeals = () => {
    this.props.navigation.navigate("deals");
  };

  handleAbout = () => {
    this.props.navigation.navigate("AboutUs");
  };

  render() {
    return (
      <View className="flex-1  justify-center items-center w-full m-0 p-0 bg-black text-white">
        <View className="flex-1  justify-center items-center   p-0 mt-0  ">
         <View className='block border-0  rounded-b-3xl overflow-hidden' style={{ borderBottomLeftRadius:40,borderBottomRightRadius:40}}>
         <ImageBackground
            source={require("../Images/Background.jpg")}
            resizeMode="cover"
            style={{width: wp('100%'), height: hp('26%')}}
          >
            <Text className='text-white text-right mr-1 mt-14 italic text-xl '>Rise and grind,</Text>
            <Text className='text-white text-right mr-1  italic text-xl '>it's coffee time!</Text>
          </ImageBackground>
         </View>
        
        <View className='flex-1  w-full space-y-0  border-0 rounded-t-3xl  mt-1' style={{borderTopLeftRadius:40,borderTopRightRadius:40}}>

            <View className='flex-1 flex-row justify-around space-x-6 overflow-hidden  mt-4 '>
             <TouchableOpacity onPress={this.handleCategories}>
             <View className=' block border-0   p-1 rounded-3xl bg-neutral-800 ml-4'>
                <Image className='border-0 rounded-3xl' style={{width: wp('45%'),height: hp('28%'),resizeMode:'cover'}} source={require('../Images/1.jpg')}></Image>
                <Text className='text-left  text-base text-white m-1 ml-3'>Our Speciality</Text>
              </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={this.handleMenu}>
              <View className='block border-0  p-1 rounded-3xl bg-neutral-800 mr-4'>
                <Image className='border-0 rounded-3xl' style={{width: wp('45%'),height: hp('28%'),resizeMode:'cover'}} source={require('../Images/Menu.jpg')}></Image>
                <Text className='text-left text-base text-white m-1 ml-3'>Menu</Text>
              </View>
              </TouchableOpacity>
            </View>

            <View className='flex-1 flex-row justify-around space-x-6 overflow-hidden  '>
            <TouchableOpacity onPress={this.handleDeals}>
              <View className=' block border-0  p-1 rounded-3xl bg-neutral-800 ml-4'>
                <Image className='border-0 rounded-3xl' style={{width: wp('45%'),height: hp('28%'),resizeMode:'cover'}} source={require('../Images/deals.jpg')}></Image>
                <Text className='text-left text-base text-white m-1 ml-3'>Deals</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleAbout}>
              <View className='block border-0  p-1 rounded-3xl bg-neutral-800 mr-4'>
                <Image className='border-0 rounded-3xl' style={{width: wp('45%'),height: hp('28%'),resizeMode:'cover'}} source={require('../Images/cafe1.jpg')}></Image>
                <Text className='text-left text-base text-white m-1 ml-3'>About</Text>
              </View>
              </TouchableOpacity>
            </View>
          {/* <TabBarnavigation/> */}
        </View>
      
        </View>
        
     
      </View>
      
    );
  }
}

export default HomeScreen;
