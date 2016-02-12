/*  Apache Commons Lang – ArrayUtils
    Java API
    Java 8 Stream
*/
package com.tsuyu.example.array;

import org.apache.commons.lang3.ArrayUtils;

import java.util.Arrays;

public class JoinArray {

    public static void main(String[] args) {

        String[] s1 = new String[]{"a", "b", "c"};
        String[] s2 = new String[]{"d", "e", "f"};

        String[] result = ArrayUtils.addAll(s1, s2);

        System.out.println(Arrays.toString(result));

		int [] int1 = new int[]{1,2,3};
        int[] int2 = new int[]{4,5,6};

        int[] result2 = ArrayUtils.addAll(int1, int2);

        System.out.println(Arrays.toString(result2));

    }

}
