<?php 
	header("content-type:text/html;charset=utf-8");

	echo '<table border=1 col=10>';
		for ($i=1; $i < 10; $i++) { 
			echo '<tr>';
			for ($j=1; $j <=$i; $j++) { 
				echo '<td>'.$i.'X'.$j.'='.$i*$j.'</td>';
			}
				
			echo '</tr>';
		}
	echo '</table>';
 ?>