public static String[] merge(final String[] a, final String[] b) {

        List lst = new ArrayList(Arrays.asList(a));
        lst.addAll(Arrays.asList(b));

        Object[] objectArray = lst.toArray();

        String[] stringArray = Arrays.copyOf(objectArray, objectArray.length, String[].class);

        return stringArray;
 }