# Generated by Django 3.2.8 on 2021-10-21 09:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_alter_customuser_portefeuille'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='customuser',
            options={},
        ),
        migrations.AlterModelTable(
            name='customuser',
            table='authentication_customuser',
        ),
    ]