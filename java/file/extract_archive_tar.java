//Compressing files to Tar File :
private File compressFilesToTarFile(List files) throws Exception {
 TarEntry tarEntry = null;
 File tarFile = new File(CommonConstants.ROOT_BACKUP_FOLDER
     +File.separator
     +CommonConstants.LOGS_BACKUP_FOLDER
     +File.separator
     +buildGeneratedTarFileName());
 tarFile.createNewFile();
 
 OutputStream outputStream = new FileOutputStream(tarFile);
 
 TarOutputStream tarOutputStream = new TarOutputStream(outputStream);
 
 for(File file : files)
 {
  tarEntry = new TarEntry(file);
  tarOutputStream.putNextEntry(tarEntry);
  tarOutputStream.write(getBytesFromFile(file));
  tarOutputStream.closeEntry();
 }
 
 tarOutputStream.close();
 
 return tarFile;
}

private static byte[] getBytesFromFile(File file) throws Exception {
 InputStream is = new FileInputStream(file);

 // Get the size of the file
 long length = file.length();

 if (length > Integer.MAX_VALUE) {
     // File is too large
 }

 // Create the byte array to hold the data
 byte[] bytes = new byte[(int)length];

 // Read in the bytes
 int offset = 0;
 int numRead = 0;
 while (offset <>
        && (numRead=is.read(bytes, offset, bytes.length-offset)) >= 0) {
     offset += numRead;
 }

 // Ensure all the bytes have been read in
 if (offset <>
     throw new Exception("Could not completely read file "+file.getName());
 }

 // Close the input stream and return bytes
 is.close();
 return bytes;
}

//Extracting files from Tar File
private static void untarBaseUpgradeFile(File tarFile, File dest) throws Exception
  {
    
    dest.mkdir();

    TarInputStream tin = new TarInputStream(new GZIPInputStream(new FileInputStream(tarFile)));

    TarEntry tarEntry = tin.getNextEntry();
    while (tarEntry != null)
    {
      File destPath = new File(dest.toString() + File.separatorChar + tarEntry.getName());
      if (tarEntry.isDirectory()) {
        destPath.mkdir();
      }
      else {
        FileOutputStream fout = new FileOutputStream(destPath);
        tin.copyEntryContents(fout);
        fout.close();
      }
      tarEntry = tin.getNextEntry();
    }
    tin.close(); tin = null;
  }