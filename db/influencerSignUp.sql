INSERT INTO nano_influencers (igAccountName, atName, profilePicture, accountDescription, followerCount, averageLikes, averageComments, engagementRate, audienceBreakdown, pricePerPost, contactInfo, nano_users_id) 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
RETURNING * ;