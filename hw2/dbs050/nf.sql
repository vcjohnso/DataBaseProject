SELECT (SELECT DISTINCT COUNT(*) 
            FROM (SELECT COUNT(*) 
                FROM hw2_1nf_difficult 
                ) AS set1)
        - (SELECT COUNT (*) 
            FROM (SELECT DISTINCT COUNT(0)
            FROM hw2_1nf_difficult) AS temp) 
            AS count;

SELECT k1,k2,a,b,c,d,e,f,COUNT(*)
            FROM hw2_1nf_difficult
            GROUP BY k1,k2,a,b,c,d,e,f 
            HAVING COUNT(*)>1;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k1)
                FROM hw2_1nf_difficult) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k1, a)
                FROM hw2_1nf_difficult)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k1)
                FROM hw2_1nf_difficult) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k1, b)
                FROM hw2_1nf_difficult)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k1)
                FROM hw2_1nf_difficult) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k1, c)
                FROM hw2_1nf_difficult)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k1)
                FROM hw2_1nf_difficult) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k1, d)
                FROM hw2_1nf_difficult)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k1)
                FROM hw2_1nf_difficult) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k1, e)
                FROM hw2_1nf_difficult)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k1)
                FROM hw2_1nf_difficult) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k1, f)
                FROM hw2_1nf_difficult)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k2)
                FROM hw2_1nf_difficult) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k2, a)
                FROM hw2_1nf_difficult)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k2)
                FROM hw2_1nf_difficult) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k2, b)
                FROM hw2_1nf_difficult)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k2)
                FROM hw2_1nf_difficult) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k2, c)
                FROM hw2_1nf_difficult)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k2)
                FROM hw2_1nf_difficult) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k2, d)
                FROM hw2_1nf_difficult)AS set2)
            as count;

SELECT (SELECT DISTINCT COUNT(*) 
            FROM (SELECT COUNT(*) 
                FROM hw2_2nf_not3nf 
                ) AS set1)
        - (SELECT COUNT (*) 
            FROM (SELECT DISTINCT COUNT(0)
            FROM hw2_2nf_not3nf) AS temp) 
            AS count;

SELECT k,a,b,c,COUNT(*)
            FROM hw2_2nf_not3nf
            GROUP BY k,a,b,c 
            HAVING COUNT(*)>1;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(b)
                FROM hw2_2nf_not3nf) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(b, a)
                FROM hw2_2nf_not3nf)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(c)
                FROM hw2_2nf_not3nf) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(c, a)
                FROM hw2_2nf_not3nf)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(c)
                FROM hw2_2nf_not3nf) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(c, b)
                FROM hw2_2nf_not3nf)AS set2)
            as count;

SELECT (SELECT DISTINCT COUNT(*) 
            FROM (SELECT COUNT(*) 
                FROM hw2_3nf_notbcnf_2 
                ) AS set1)
        - (SELECT COUNT (*) 
            FROM (SELECT DISTINCT COUNT(0)
            FROM hw2_3nf_notbcnf_2) AS temp) 
            AS count;

SELECT k1,k2,a,b,COUNT(*)
            FROM hw2_3nf_notbcnf_2
            GROUP BY k1,k2,a,b 
            HAVING COUNT(*)>1;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k1)
                FROM hw2_3nf_notbcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k1, a)
                FROM hw2_3nf_notbcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k1)
                FROM hw2_3nf_notbcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k1, b)
                FROM hw2_3nf_notbcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k2)
                FROM hw2_3nf_notbcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k2, a)
                FROM hw2_3nf_notbcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k2)
                FROM hw2_3nf_notbcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k2, b)
                FROM hw2_3nf_notbcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(b)
                FROM hw2_3nf_notbcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(b, a)
                FROM hw2_3nf_notbcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(a)
                FROM hw2_3nf_notbcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(a, k1)
                FROM hw2_3nf_notbcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(a)
                FROM hw2_3nf_notbcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(a, k2)
                FROM hw2_3nf_notbcnf_2)AS set2)
            as count;

SELECT (SELECT DISTINCT COUNT(*) 
            FROM (SELECT COUNT(*) 
                FROM hw2_bcnf 
                ) AS set1)
        - (SELECT COUNT (*) 
            FROM (SELECT DISTINCT COUNT(0)
            FROM hw2_bcnf) AS temp) 
            AS count;

SELECT k1,k2,a,b,COUNT(*)
            FROM hw2_bcnf
            GROUP BY k1,k2,a,b 
            HAVING COUNT(*)>1;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k1)
                FROM hw2_bcnf) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k1, a)
                FROM hw2_bcnf)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k1)
                FROM hw2_bcnf) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k1, b)
                FROM hw2_bcnf)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k2)
                FROM hw2_bcnf) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k2, a)
                FROM hw2_bcnf)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k2)
                FROM hw2_bcnf) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k2, b)
                FROM hw2_bcnf)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(b)
                FROM hw2_bcnf) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(b, a)
                FROM hw2_bcnf)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(a)
                FROM hw2_bcnf) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(a, k1)
                FROM hw2_bcnf)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(a)
                FROM hw2_bcnf) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(a, k2)
                FROM hw2_bcnf)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(b)
                FROM hw2_bcnf) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(b, k1)
                FROM hw2_bcnf)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(b)
                FROM hw2_bcnf) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(b, k2)
                FROM hw2_bcnf)AS set2)
            as count;

SELECT (SELECT DISTINCT COUNT(*) 
            FROM (SELECT COUNT(*) 
                FROM hw2_bcnf_2 
                ) AS set1)
        - (SELECT COUNT (*) 
            FROM (SELECT DISTINCT COUNT(0)
            FROM hw2_bcnf_2) AS temp) 
            AS count;

SELECT id1,id2,col1,col2,COUNT(*)
            FROM hw2_bcnf_2
            GROUP BY id1,id2,col1,col2 
            HAVING COUNT(*)>1;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(id1)
                FROM hw2_bcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(id1, col1)
                FROM hw2_bcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(id1)
                FROM hw2_bcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(id1, col2)
                FROM hw2_bcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(id2)
                FROM hw2_bcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(id2, col1)
                FROM hw2_bcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(id2)
                FROM hw2_bcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(id2, col2)
                FROM hw2_bcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(col2)
                FROM hw2_bcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(col2, col1)
                FROM hw2_bcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(col1)
                FROM hw2_bcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(col1, id1)
                FROM hw2_bcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(col1)
                FROM hw2_bcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(col1, id2)
                FROM hw2_bcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(col2)
                FROM hw2_bcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(col2, id1)
                FROM hw2_bcnf_2)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(col2)
                FROM hw2_bcnf_2) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(col2, id2)
                FROM hw2_bcnf_2)AS set2)
            as count;

SELECT (SELECT DISTINCT COUNT(*) 
            FROM (SELECT COUNT(*) 
                FROM hw2_invalidPKk_not1NF 
                ) AS set1)
        - (SELECT COUNT (*) 
            FROM (SELECT DISTINCT COUNT(0)
            FROM hw2_invalidPKk_not1NF) AS temp) 
            AS count;

SELECT k,a,COUNT(*)
            FROM hw2_invalidPKk_not1NF
            GROUP BY k,a 
            HAVING COUNT(*)>1;

SELECT (SELECT DISTINCT COUNT(*) 
            FROM (SELECT COUNT(*) 
                FROM hw2_large_1 
                ) AS set1)
        - (SELECT COUNT (*) 
            FROM (SELECT DISTINCT COUNT(0)
            FROM hw2_large_1) AS temp) 
            AS count;

SELECT id,val1,val2,val3,val4,val5,COUNT(*)
            FROM hw2_large_1
            GROUP BY id,val1,val2,val3,val4,val5 
            HAVING COUNT(*)>1;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(val2)
                FROM hw2_large_1) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(val2, val1)
                FROM hw2_large_1)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(val3)
                FROM hw2_large_1) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(val3, val1)
                FROM hw2_large_1)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(val3)
                FROM hw2_large_1) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(val3, val2)
                FROM hw2_large_1)AS set2)
            as count;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(val4)
                FROM hw2_large_1) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(val4, val1)
                FROM hw2_large_1)AS set2)
            as count;

SELECT (SELECT DISTINCT COUNT(*) 
            FROM (SELECT COUNT(*) 
                FROM hw2_large_3 
                ) AS set1)
        - (SELECT COUNT (*) 
            FROM (SELECT DISTINCT COUNT(0)
            FROM hw2_large_3) AS temp) 
            AS count;

SELECT k1,k2,a,b,c,d,e,f,g,h,l,m,COUNT(*)
            FROM hw2_large_3
            GROUP BY k1,k2,a,b,c,d,e,f,g,h,l,m 
            HAVING COUNT(*)>1;

SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(k1)
                FROM hw2_large_3) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(k1, a)
                FROM hw2_large_3)AS set2)
            as count;

SELECT (SELECT DISTINCT COUNT(*) 
            FROM (SELECT COUNT(*) 
                FROM hw2_pkbad_3 
                ) AS set1)
        - (SELECT COUNT (*) 
            FROM (SELECT DISTINCT COUNT(0)
            FROM hw2_pkbad_3) AS temp) 
            AS count;

SELECT k,a,COUNT(*)
            FROM hw2_pkbad_3
            GROUP BY k,a 
            HAVING COUNT(*)>1;

