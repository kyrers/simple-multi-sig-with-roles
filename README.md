This branch is based on https://github.com/scaffold-eth/scaffold-eth/tree/meta-multi-sig.<br/>
You should check it out first. When you do, you'll see that there's a proposed challenge: Add roles to the multi-sig-wallet. This is a possible solution.
<br/>
<br/>
<b>GOALS</b>
<br/>
This is a very simple example. There are only two roles: OG and DEFAULT.
<br/>
The code is commented wherever relevant changes were written, but the intended mode of functioning was this:<br/>
1. On contract initialization, grant every initial owner the OG_ROLE. Also, give the contract the DEFAULT_ADMIN_ROLE so it can grant/revoke roles.<br/>
2. Every single transaction, in addition to having the required number of signatures, must have at least one OG as a signer.<br/>
<br/>
<br/>
<b>DISCLAIMER:</b>
Do your own research. I'm in no way a solidity expert and this code may be faulty!
