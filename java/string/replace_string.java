public void replaceString(String path){
	System.out.println("Original Path :: "+path);
	String ret = replaceAllString(path,"\\","/");
	System.out.println("Return :: "+ret);
	//return ret;
}
public String replaceAllString(String strOrig, String strFind, String strReplace) {
	if(strOrig == null) {
		return null;
	}
	StringBuffer sb = new StringBuffer(strOrig);
	String toReplace = "";
	if (strReplace == null) toReplace = "";
	else toReplace = strReplace;
	int pos = strOrig.length();
	while (pos > -1) {
		pos = strOrig.lastIndexOf(strFind, pos);
		if (pos > -1) sb.replace(pos, pos+strFind.length(), toReplace);
		pos = pos - strFind.length();
	}
	return sb.toString();
}