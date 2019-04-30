INSERT INTO nano_influencers (username, email, password, igaccountname, atname, profilepicture, accountdescription, followercount, averagelikes, averagecomments, engagementrate, audiencebreakdown, priceperpost, contactinfo) 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
RETURNING * ;