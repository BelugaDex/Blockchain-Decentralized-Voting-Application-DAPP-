async function main(){
    const Voting = await ethers.getContractTactory("Voting");

    // start deloyment, returning a promise result that reslves to a contract object
    const Voting_ = await   Voting.deploy(["Mark","Mike","Henry","Rock"],90);
    console.log("Contract address:",Voting_.address); 
}

main()
.then(() => process.exit(0))
.catch(error =>{
    console.error(error);
    process.exit(1);
});