//2 digit
public static String leadingZero(final int number, final int length) {

    String formatted = String.format("%0" + length + "d", number);

    return formatted;
}