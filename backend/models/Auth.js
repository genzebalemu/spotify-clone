import express from "express"

import mongoose, { Schema } from "mongoose"

const AuthSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:TimeRanges,
        require:true,
    }
})