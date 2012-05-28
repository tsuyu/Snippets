/*read file*/
public static void main(String[] args) {
	try {
		reader = new FileReader("MyFile.txt");
		br = new BufferedReader(reader);
		String data="";

		while((data = br.readLine())!= null){
			System.out.println(data);
		}

	} catch (FileNotFoundException e) {
		e.printStackTrace();
	} catch (IOException e) {
		e.printStackTrace();
	}
}

/*write file*/

import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;

public class WriteFile {

	public static FileWriter writer;
	public static BufferedWriter bw;

	public static void main(String[] args) {
		try {
			writer = new FileWriter("MyFile.txt", true);
			// writer = new FileWriter("src\\MyFile.txt"); For every time new
			// file.

			bw = new BufferedWriter(writer);
			bw.write("\n");
			bw.write("WRITTING some thing");
			bw.close();
			System.out.println("Check your file");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}

/*assign file content to java variable*/

import java.io.DataInputStream;
import java.io.FileInputStream;
 
public class App{
 
	public static void main (String args[]) {
 
	try{
 
	         DataInputStream dis = 
		    new DataInputStream (
		    	 new FileInputStream ("c:\\files.log"));
 
		 byte[] datainBytes = new byte[dis.available()];
		 dis.readFully(datainBytes);
		 dis.close();
 
		 String content = new String(datainBytes, 0, datainBytes.length);
 
		 System.out.println(content);
 
	}catch(Exception ex){
		ex.printStackTrace();
	}
 
  }
}