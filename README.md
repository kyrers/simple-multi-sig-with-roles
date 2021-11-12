# SIMPLE MULTI SIG WITH ROLES

This branch is based on https://github.com/scaffold-eth/scaffold-eth/tree/meta-multi-sig.<br/>
You should check it out first. When you do, you'll see that there's a proposed challenge: Add roles to the multi-sig-wallet. This is a possible solution.
<br/>
<br/>
**GOALS**
This is a very simple example. There are only two roles: *OG* and *DEFAULT*.
<br/>
<br/>
The code is commented wherever relevant changes were written, but the intended mode of functioning was this:<br/>
- On contract initialization, grant every initial owner the *OG_ROLE*. Also, give the contract the *DEFAULT_ADMIN_ROLE* so it can grant/revoke roles.<br/>
- Every single transaction, in addition to having the required number of signatures, must have at least one OG as a signer.<br/>
<br/>
<br/>
**How to run:**
- After you download, you might need to run *yarn install* in the project folder;
- After that open 4 consoles in the project folder and run:
1. *yarn start* 
2. *yarn chain* 
3. *yarn backend* 
4. *yarn deploy* 
<br/>
<br/>
**DISCLAIMER:**
Do your own research. I'm in no way a solidity expert and this code may be faulty!
