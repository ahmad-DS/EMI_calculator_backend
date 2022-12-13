const mongoose=require("mongoose");

const EMISchema=mongoose.Schema({
	userId:{type:String,required:true},
	loan:{type:Number,required:true},
	interest:{type:Number,required:true},
	tenure:{type:Number,required:true},

	
})

const EMIModel=mongoose.model("emi",EMISchema);

module.exports=EMIModel;