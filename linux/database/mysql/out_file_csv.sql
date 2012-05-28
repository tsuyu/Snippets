SELECT * INTO OUTFILE 'C:\\Users\\tsuyu_7\\Desktop\\backup\\data.csv'
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY "\n"
FROM user;

SELECT IFNULL(user_id,'') as user_id,IFNULL(user_name,'') as user_name INTO OUTFILE 'C:\\Users\\tsuyu_7\\Desktop\\lor.txt'
FIELDS TERMINATED BY '|' LINES TERMINATED BY "\n"
FROM gn_userinfo