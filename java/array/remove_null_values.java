List<String> stringList = new ArrayList<String>();

for(String string : firstArray) {
   if(string != null && string.length() > 0) {
      stringList.add(string);
   }
}

firstArray = stringList.toArray(new String[stringList.size()]);