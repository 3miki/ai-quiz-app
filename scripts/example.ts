"use client";
import "dotenv/config";

import React, { useState } from "react";
import supabase from "../app/supabaseClient";
import signInWithEmail from "../app/upload/signin";
import { v4 as uuid } from "uuid";
interface FormValues {
  images: { file: File }[];
}

console.log("HI");

const main = async () => {
  // call the backend function create_quiz to generate the quiz
  const response = [
    {
      question:
        "What important role do squirrels play in forest ecosystems by planting trees?",
      answer: "They help in seed dispersal.",
      url: "https://spxtqybyuhjyhqgveait.supabase.co/storage/v1/object/public/photos/3d3f5f4b-b36d-48fa-8b40-51772823130d",
    },
  ];
  console.log("quiz: ", response[0]);

  // supabase auth
  signInWithEmail();
  console.log("signed in");

  // save the quiz to the database
  console.log("Attempting to insert quiz:");
  try {
    const { data: insertData, error: insertError } = await supabase
      .from("quiz")
      .insert(response[0]);
    if (insertError) {
      throw new Error("Failed to insert quiz");
    }
    console.log("quiz saved", insertData);
  } catch (insertError) {
    console.log("error: ", insertError);
  }
};

main();
