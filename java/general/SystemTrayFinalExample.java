import java.awt.AWTException;
import java.awt.MenuItem;
import java.awt.PopupMenu;
import java.awt.SystemTray;
import java.awt.Toolkit;
import java.awt.TrayIcon;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

public class SystemTrayFinalExample extends JFrame implements ActionListener, MouseListener, WindowListener
{
	/**
	 * Generated serial id
	 */
	private static final long serialVersionUID = -6851481936521914923L;
	private TrayIcon trayicon;
	private PopupMenu popupmenu;
	private MenuItem menuitem;

	public SystemTrayFinalExample()
	{
		if(!SystemTray.isSupported())
		{
			JOptionPane.showMessageDialog(this,"Your system doesn't supports System Tray","ERROR",0);
			System.exit(0);
		}
		else
		{
			setTitle("System Tray Demo");
			setSize(300,200);
			setLocation(300,200);

			popupmenu = new PopupMenu();

			menuitem = new MenuItem("Exit");
			menuitem.addActionListener(this);
			popupmenu.add(menuitem);

			trayicon = new TrayIcon(Toolkit.getDefaultToolkit().getImage(getClass().getResource("image/Crystal.PNG")), "System Tray Final Example", popupmenu);

			trayicon.addMouseListener(this);

			addWindowListener(this);
			
			setVisible(true);
		}
	}

	public void actionPerformed(ActionEvent e)
	{
		System.exit(0);
	}

	public static void main(String args[])
	{
		new SystemTrayFinalExample();
	}

	public void mouseClicked(MouseEvent e)
	{
		if(e.getButton() == MouseEvent.BUTTON1)
		{
			setVisible(true);
			setExtendedState(JFrame.NORMAL);
		}	
	}

	public void mouseEntered(MouseEvent e) {}

	public void mouseExited(MouseEvent e) {}

	public void mousePressed(MouseEvent e) {}

	public void mouseReleased(MouseEvent e) {}

	public void windowActivated(WindowEvent e) {}

	public void windowClosed(WindowEvent e) {}

	public void windowDeactivated(WindowEvent e) {}

	public void windowClosing(WindowEvent e)
	{
		System.exit(0);
	}

	public void windowIconified(WindowEvent ex)
	{
		setVisible(false);
		try
		{
			SystemTray.getSystemTray().add(trayicon);
		}
		catch(AWTException e)
		{
			e.printStackTrace();
		}
	}

	public void windowDeiconified(WindowEvent ex)
	{
		SystemTray.getSystemTray().remove(trayicon);
	}

	public void windowOpened(WindowEvent e) {}
}
