import {suma} from "./calculos";
import express from "express";
import type {rgb} from "./types/types.d.ts"

const app=express();

let result=suma(4,3);

let color:rgb=[400,300,200];

function sleep(ms:number):Promise<void>{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function log(){
    await sleep(5000);
    console.log(result);
}

log();