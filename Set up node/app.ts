import { suma } from "./calculos";
import express from "express";

const app=express();

let result=suma(4,3);

function sleep(ms:number):Promise<void>{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function log(){
    await sleep(5000);
    console.log(result);
}

log();